import React, {ChangeEvent} from "react"
import { TextField } from '@mui/material'

interface MyInputProps {
  label: string,
  type: string,
  value: string,
  onChangeInput: (e: ChangeEvent<HTMLInputElement>, inputType: string) => void
}

const MyInput = ({ label, type, value, onChangeInput }: MyInputProps) => {

  return <TextField
      label={label}
      name={label.toLowerCase()}
      helperText={`Please enter your ${label.toLowerCase()}`}
      variant="outlined"
      required
      value={value}
      type={type}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInput(e, label.toLowerCase())}
      sx={{ width: '100%', margin: '10px 0' }}
    />
}

export default MyInput
