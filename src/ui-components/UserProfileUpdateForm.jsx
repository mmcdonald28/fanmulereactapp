/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getUserProfile } from "../graphql/queries";
import { updateUserProfile } from "../graphql/mutations";
const client = generateClient();
export default function UserProfileUpdateForm(props) {
  const {
    id: idProp,
    userProfile: userProfileModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Username: "",
    Email: "",
    Password: "",
    Balance: "",
    Birthday: "",
  };
  const [Username, setUsername] = React.useState(initialValues.Username);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Password, setPassword] = React.useState(initialValues.Password);
  const [Balance, setBalance] = React.useState(initialValues.Balance);
  const [Birthday, setBirthday] = React.useState(initialValues.Birthday);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userProfileRecord
      ? { ...initialValues, ...userProfileRecord }
      : initialValues;
    setUsername(cleanValues.Username);
    setEmail(cleanValues.Email);
    setPassword(cleanValues.Password);
    setBalance(cleanValues.Balance);
    setBirthday(cleanValues.Birthday);
    setErrors({});
  };
  const [userProfileRecord, setUserProfileRecord] =
    React.useState(userProfileModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getUserProfile.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUserProfile
        : userProfileModelProp;
      setUserProfileRecord(record);
    };
    queryData();
  }, [idProp, userProfileModelProp]);
  React.useEffect(resetStateValues, [userProfileRecord]);
  const validations = {
    Username: [{ type: "Required" }],
    Email: [{ type: "Required" }, { type: "Email" }],
    Password: [{ type: "Required" }],
    Balance: [],
    Birthday: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Username,
          Email,
          Password,
          Balance: Balance ?? null,
          Birthday: Birthday ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateUserProfile.replaceAll("__typename", ""),
            variables: {
              input: {
                id: userProfileRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserProfileUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={Username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username: value,
              Email,
              Password,
              Balance,
              Birthday,
            };
            const result = onChange(modelFields);
            value = result?.Username ?? value;
          }
          if (errors.Username?.hasError) {
            runValidationTasks("Username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("Username", Username)}
        errorMessage={errors.Username?.errorMessage}
        hasError={errors.Username?.hasError}
        {...getOverrideProps(overrides, "Username")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Email: value,
              Password,
              Balance,
              Birthday,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        value={Password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Email,
              Password: value,
              Balance,
              Birthday,
            };
            const result = onChange(modelFields);
            value = result?.Password ?? value;
          }
          if (errors.Password?.hasError) {
            runValidationTasks("Password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("Password", Password)}
        errorMessage={errors.Password?.errorMessage}
        hasError={errors.Password?.hasError}
        {...getOverrideProps(overrides, "Password")}
      ></TextField>
      <TextField
        label="Balance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Balance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Username,
              Email,
              Password,
              Balance: value,
              Birthday,
            };
            const result = onChange(modelFields);
            value = result?.Balance ?? value;
          }
          if (errors.Balance?.hasError) {
            runValidationTasks("Balance", value);
          }
          setBalance(value);
        }}
        onBlur={() => runValidationTasks("Balance", Balance)}
        errorMessage={errors.Balance?.errorMessage}
        hasError={errors.Balance?.hasError}
        {...getOverrideProps(overrides, "Balance")}
      ></TextField>
      <TextField
        label="Birthday"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Birthday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Username,
              Email,
              Password,
              Balance,
              Birthday: value,
            };
            const result = onChange(modelFields);
            value = result?.Birthday ?? value;
          }
          if (errors.Birthday?.hasError) {
            runValidationTasks("Birthday", value);
          }
          setBirthday(value);
        }}
        onBlur={() => runValidationTasks("Birthday", Birthday)}
        errorMessage={errors.Birthday?.errorMessage}
        hasError={errors.Birthday?.hasError}
        {...getOverrideProps(overrides, "Birthday")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userProfileModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || userProfileModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
