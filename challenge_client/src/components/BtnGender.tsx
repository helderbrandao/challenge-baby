import React from "react";
import * as FaIcons from "react-icons/fa";
import {FaMars, FaVenus} from "react-icons/fa";

interface Props {
    parentCallback: (data: string[]) => void,
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    gender: GenderProps;
    radius: string
    width: string;
    margin: string;
}

interface GenderProps {
    label: string,
    icon: string
}


const GENDER = {
    "FEMALE": {
        "label": "FEMALE",
        "icon": "Mars"
    },
    "MALE": {
        "label": "MALE",
        "icon": "Venus"
    }
}

const Button: React.FC<Props> = ({
                                     parentCallback,
                                     border,
                                     color,
                                     children,
                                     height,
                                     gender,
                                     radius,
                                     width,
                                     margin
                                 }) => {
    const handleClick = () => {
        fetch('http://localhost:8080/names/' + gender.label)
            .then(response => response.json())
            .then(data => parentCallback(data));
    }

    //TODO: I did this hack because I had type error
    const CustomTag = FaIcons[gender.icon === GENDER.FEMALE.icon ? "FaVenus" : "FaMars"];

    // @ts-ignore
    // @ts-ignore
    return (
        <button
            title={gender.label}
            onClick={handleClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
                color: "white",
                fontSize: "larger",
                margin: margin,
            }}
        >
            <CustomTag />
        </button>
    );
}

export default Button;
export {GENDER}