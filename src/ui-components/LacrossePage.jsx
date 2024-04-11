/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import TFPage from "./TFPage";
import { Flex } from "@aws-amplify/ui-react";
export default function LacrossePage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LacrossePage")}
      {...rest}
    >
      <TFPage
        display="flex"
        gap="20px"
        direction="column"
        width="1343px"
        height="972px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="80px 80px 80px 80px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "LacrossePage39434810")}
      ></TFPage>
    </Flex>
  );
}
