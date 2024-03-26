/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, IconProps, ImageProps, PasswordFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GoodSignUpOverridesProps = {
    GoodSignUp?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Sign Up"?: PrimitiveOverrideProps<TextProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
    "Create Account"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Already Have an Account? Login!"?: PrimitiveOverrideProps<TextProps>;
    Birthday?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 12"?: PrimitiveOverrideProps<IconProps>;
    "Mask group"?: PrimitiveOverrideProps<ViewProps>;
    Username?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<IconProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type GoodSignUpProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GoodSignUpOverridesProps | undefined | null;
}>;
export default function GoodSignUp(props: GoodSignUpProps): React.ReactElement;
