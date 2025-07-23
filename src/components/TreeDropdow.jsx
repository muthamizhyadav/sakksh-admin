import {
    Combobox,
    ComboboxOption,
    useCombobox,

  } from '@mantine/core';
  import { useState } from 'react';
  
  // Sample Tree Data
  const treeData = [
    { label: 'Embassy House Bengaluru', value: 'embassy' },
    { label: 'North', isGroup: true },
    { label: 'NCR', value: 'ncr', parent: 'North' },
    { label: 'Jaipur', value: 'jaipur', parent: 'North' },
    { label: 'Dehradun', value: 'dehradun', parent: 'North' },
    { label: 'Lucknow', value: 'lucknow', parent: 'North' },
    { label: 'South', isGroup: true },
    { label: 'Bengaluru', value: 'bengaluru', parent: 'South' },
    { label: 'Hyderabad', value: 'hyderabad', parent: 'South' },
    { label: 'Chennai', value: 'chennai', parent: 'South' },
    { label: 'East', isGroup: true },
    { label: 'Kolkata EAST', value: 'kolkata', parent: 'East' },
    { label: 'West', isGroup: true },
    { label: 'Ahemdabad', value: 'ahemdabad', parent: 'West' },
    { label: 'Pune', value: 'pune', parent: 'West' },
    { label: 'Mumbai', value: 'mumbai', parent: 'West' },
    { label: 'Testing label', isGroup: true },
  ];
  
  // Main Component
  export default function TreeDropdown() {
    const combobox = useCombobox();
    const [value, setValue] = useState(null);
    const [search, setSearch] = useState('');
  
    const filtered = treeData.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <input
            placeholder="Select Value"
            value={
              search.length > 0 || value === null
                ? search
                : treeData.find((x) => x.value === value)?.label
            }
            onChange={(event) => {
              setSearch(event.currentTarget.value);
              combobox.openDropdown();
            }}
            onClick={() => combobox.toggleDropdown()}
            className="border w-full p-2 rounded"
          />
        </Combobox.Target>
  
        <Combobox.Dropdown>
          <Combobox.Options>
            {filtered.map((item, index) => {
              if (item.isGroup) {
                return (
                  <div
                    key={`group-${index}`}
                    className="text-sm font-semibold px-3 py-1 bg-gray-100 text-gray-800"
                  >
                    {item.label}
                  </div>
                );
              }
  
              const indent = item.parent ? 2 : 0;
  
              return (
                <ComboboxOption
                  key={`opt-${item.value}`}
                  value={item.value}
                  className="text-sm"
                >
                  <div style={{ paddingLeft: `${indent * 10}px` }}>
                    {item.label}
                  </div>
                </ComboboxOption>
              );
            })}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    );
  }
  