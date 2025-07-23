import React, { useState } from 'react';

const TreeDropdown = ({ data, onSelect, selected ,title ='' }) => {
  const [open, setOpen] = useState(false);

  
  const renderTree = (nodes, level = 0) => {
    return nodes.map((node) => (
      <div key={node.value} style={{ marginLeft: level * 16 }}>
        <div
          className="cursor-pointer px-2 py-1 hover:bg-gray-100 rounded"
          onClick={() => {
            onSelect(node);
            setOpen(false);
          }}
        >
          {node.label}
        </div>
        {node.children && renderTree(node.children, level + 1)}
      </div>
    ));
  };

  return (
    <div className="relative inline-block w-full">
           {title && <label className="text-sm font-medium text-gray-700 mb-1">{title}</label>}

      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-300 px-4 py-2 bg-white cursor-pointer shadow-sm focus:border-blue-500 focus:ring-blue-500 rounded-md"
      >
        {selected || 'Select Node'}
      </div>

      {open && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full max-h-64 overflow-auto shadow-lg">
          {renderTree(data)}
        </div>
      )}
    </div>
  );
};

export default TreeDropdown;
