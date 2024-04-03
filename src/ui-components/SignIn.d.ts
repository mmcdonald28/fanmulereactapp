/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SignInOverridesProps = {
    SignIn?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    Password?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 4"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    "Create Account"?: PrimitiveOverrideProps<TextProps>;
    "Already Have an Account? Login!"?: PrimitiveOverrideProps<TextProps>;
    Birthday?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<IconProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<IconProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type SignInProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SignInOverridesProps | undefined | null;
}>;
export default function SignIn(props: SignInProps): React.ReactElement;
