/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TFPageProps } from "./TFPage";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BaseballPageOverridesProps = {
    BaseballPage?: PrimitiveOverrideProps<FlexProps>;
    BaseballPage39435172?: TFPageProps;
} & EscapeHatchProps;
export declare type BaseballPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BaseballPageOverridesProps | undefined | null;
}>;
export default function BaseballPage(props: BaseballPageProps): React.ReactElement;
