// import React from "react";
// import CreateableSelect from "react-select/creatable";
// import { Controller } from "react-hook-form";

// function SelectCreateable({ isMulti, name, label, placeholderText, req, control, options, disabled, error }) {
//     return (
//         <>
//             <Controller
//                 control={control}
//                 name={name}
//                 render={({ field: { onChange, onBlur, value, ref } }) => (
//                     <CreateableSelect
//                         isMulti={isMulti}
//                         name={name}
//                         ref={ref}
//                         onBlur={onBlur}
//                         onChange={(val) => onChange(isMulti ? [...val] : val.value)}
//                         value={value}
//                         placeholder={placeholderText}
//                         options={options}
//                         isDisabled={disabled}
//                         styles={customStyles}
//                         noOptionsMessage={() => "Create"}
//                         menuPortalTarget={document.body}
//                         menuPosition={"fixed"}
//                     />
//                 )}
//             />
//         </>
//     );
// }

// export default SelectCreateable;
