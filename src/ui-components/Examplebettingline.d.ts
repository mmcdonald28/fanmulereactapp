/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ExamplebettinglineOverridesProps = {
    Examplebettingline?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    "Sport/Event"?: PrimitiveOverrideProps<TextProps>;
    Line?: PrimitiveOverrideProps<TextProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button39493466?: PrimitiveOverrideProps<ButtonProps>;
    Button39493467?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ExamplebettinglineProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ExamplebettinglineOverridesProps | undefined | null;
}>;
export default function Examplebettingline(props: ExamplebettinglineProps): React.ReactElement;
