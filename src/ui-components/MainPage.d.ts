/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeaderProps } from "./NavBarHeader";
import { ExamplebettinglineProps } from "./Examplebettingline";
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
export declare type MainPageOverridesProps = {
    MainPage?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: NavBarHeaderProps;
    "Example betting line39184447"?: ExamplebettinglineProps;
    "Example betting line39184475"?: ExamplebettinglineProps;
    "Example betting line39184489"?: ExamplebettinglineProps;
    "Example betting line39184503"?: ExamplebettinglineProps;
} & EscapeHatchProps;
export declare type MainPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MainPageOverridesProps | undefined | null;
}>;
export default function MainPage(props: MainPageProps): React.ReactElement;
