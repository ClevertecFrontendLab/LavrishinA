import {Link} from "react-router-dom";
import {Button, Result} from "antd";
import {ComponentPropsWithoutRef} from "react";


type SummaryResultProps = {
    label?: string
    redirectTo: string
} & ComponentPropsWithoutRef<typeof Result>

export const SummaryResult = (props: SummaryResultProps) => {
    const {redirectTo, label} = props

    return (
        <Result
            {...props}
            className={"result"}
            extra={
                <Link to={redirectTo}>
                    <Button type="primary" key="console" size={"large"} block>
                        {label}
                    </Button>
                </Link>
            }
        />
    );
};

