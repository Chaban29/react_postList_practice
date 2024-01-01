import styled from "styled-components";

const StyledSelect = styled.select`
  display: flex;
  justify-content: end;
  margin: 20px;
  border: 3px solid skyblue;
  padding: 10px 15px;
  outline: none;
  background: #f3f5f9;
  color: ${(props) => props.color || "#111"}
  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
`;

const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className="select__item">
      <StyledSelect
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled={true} value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
};

export default Select;
