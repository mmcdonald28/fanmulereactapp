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
export declare type AccountRecoveryOverridesProps = {
    AccountRecovery?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<IconProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    "Account Recovery"?: PrimitiveOverrideProps<TextProps>;
    "Enter email or phone"?: PrimitiveOverrideProps<TextProps>;
    "Enter last password"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 5"?: PrimitiveOverrideProps<IconProps>;
    Next?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AccountRecoveryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AccountRecoveryOverridesProps | undefined | null;
}>;
export default function AccountRecovery(props: AccountRecoveryProps): React.ReactElement;
