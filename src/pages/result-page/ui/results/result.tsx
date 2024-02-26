import {Link} from "react-router-dom";
import {Button, Result} from "antd";
import {ComponentPropsWithoutRef} from "react";


type SummaryResultProps = {
    label?: string
    redirectTo: string
    dataTestId: string
} & ComponentPropsWithoutRef<typeof Result>

export const SummaryResult = (props: SummaryResultProps) => {
    const {redirectTo, label, dataTestId} = props

    return (
        <Result
            {...props}
            className={"result"}
            extra={
                <Link to={redirectTo}>
                    <Button data-test-id={dataTestId} type="primary" key="console" size={"large"} block>
                        {label}
                    </Button>
                </Link>
            }
        />
    );
};

