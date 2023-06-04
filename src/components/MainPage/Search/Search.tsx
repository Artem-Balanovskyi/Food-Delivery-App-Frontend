import {TextField} from "@mui/material";

const Search = () => {

    return <>
        <TextField
            label='search'
            variant="standard"
            fullWidth
            type='search'
            sx={{
                mb: "1.5rem"
            }}
        />
    </>
};

export default Search;