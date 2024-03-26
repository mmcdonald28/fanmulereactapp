/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Group1OverridesProps = {
    Group1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Login49?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    Login417?: PrimitiveOverrideProps<TextProps>;
    "Remember Me Box"?: PrimitiveOverrideProps<FlexProps>;
    "Forgot Password"?: PrimitiveOverrideProps<TextProps>;
    "Change email"?: PrimitiveOverrideProps<TextProps>;
    "Need an Account? Sign Up!"?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Group1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Group1OverridesProps | undefined | null;
}>;
export default function Group1(props: Group1Props): React.ReactElement;
