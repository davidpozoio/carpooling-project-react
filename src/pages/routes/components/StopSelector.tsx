import { Checkbox, Select, SelectProps } from "antd";
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
    getAllStops().then((res) => {
      const options: SelectProps["options"] = res.data.map((option) => ({
        label: option.name,
        value: option.id,
      }));

      return options;
    })
  );

  return <Select  mode="multiple" options={stops} onChange={()=>onChange()}/>;
};
export default StopSelector;
