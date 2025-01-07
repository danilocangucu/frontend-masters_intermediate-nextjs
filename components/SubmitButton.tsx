'use client';

import { Button } from "@nextui-org/react";
import exp from "constants";
import { useFormStatus } from "react-dom";

import { ButtonProps } from "@nextui-org/react";

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

const SubmitButton = ({ label, ...btnProps }: SubmitButtonProps) => {
    const { pending } = useFormStatus()

    return (
        <Button {...btnProps} isLoading={pending} type="submit">{label}</Button>
    )
}

export default SubmitButton;