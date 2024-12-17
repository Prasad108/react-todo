import React from "react";

function Checkbox({ label, isChecked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
}

export default Checkbox;
