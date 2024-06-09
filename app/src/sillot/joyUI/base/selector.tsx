import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Select, selectClasses } from "@mui/joy";

export const Select_KeyboardArrowDown = ({ ...props }) => (
    <Select
        {...props}
        indicator={<KeyboardArrowDown />}
        sx={{
            [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                },
            },
        }}
    />
);
