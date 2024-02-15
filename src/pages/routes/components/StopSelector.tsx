import { Checkbox } from "antd";
import { useQuery } from "react-query";
import { getAllStops } from "../../../services/stopService";
import CACHE_KEYS from "../../../consts/cache-keys";
import { useState } from "react";
import { RouteStop } from "../../../models/stopModel";

interface MenuAddRoutesProps {
  onChange: (selectedStops: RouteStop[]) => void;
}

const StopSelector = ({ onChange }: MenuAddRoutesProps) => {
  const { data: stops } = useQuery([CACHE_KEYS.STOPS.LIST], () =>
    getAllStops().then((res) => res.data)
  );

  const [selectedStops, setSelectedStops] = useState<RouteStop[]>([]);

  return (
    <>
      {stops?.map((stop) => {
        return (
          <Checkbox
            key={stop.id}
            onClick={() => {
              setSelectedStops((prev) => {
                const newStops = [
                  ...prev,
                  { arriveHour: "", position: 1, stopId: stop.id },
                ];
                onChange(selectedStops);
                return newStops;
              });
            }}
          >
            {stop.name}
          </Checkbox>
        );
      })}
    </>
  );
};
export default StopSelector;
