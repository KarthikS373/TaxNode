import axios, { AxiosError, AxiosResponse } from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import "yup-phone";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import type { RequestCallBackSlice } from "../../.slicemachine/prismicio";

const RequestCallBack: React.FC<{ slice: RequestCallBackSlice }> = ({
  slice,
}) => {
  const [loading, setLoading] = useState(false);
  const { primary } = slice;
  const toast = useToast();

  // Form Validation and Submission
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required()
        .matches(/^[aA-zZ\s]+$/),
      email: Yup.string().trim().email().required(),
      phone: Yup.string().trim().phone().required(),
    }),
    onSubmit: async (value) => {
      setLoading(true);

      axios
        .post(
          "/api/createEnquiry",
          {},
          {
            params: {
              // name: formik.values.name,
              phone: formik.values.phone, 
              email: formik.values.email,
            },
          }
        )
        .then((response: AxiosResponse) => {
          console.log(response);
          if (response.status == 200) {
            toast({
              title: primary.success_toast,
              description: "",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
            formik.resetForm();
          } else if (response.status == 400) {
            throw new Error(response.data.message);
          }
        })
        .catch((error: AxiosError) => {
          console.log(error.message);
          toast({
            title: primary.error_toast,
            description: "",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  console.log(primary);

  return (
    <>
      <Box pos={"relative"} my={[10, 12, 14, 16, 20]}>
        <Container
          fontFamily={"Inter"}
          maxW={"4xl"}
          textAlign={"center"}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Heading
            color={"themeDarkPurple"}
            as={"h2"}
            fontWeight={"semibold"}
            size={"2xl"}
            textAlign={"center"}
            lineHeight={"10"}
          >
            {primary.title}
          </Heading>

          <Text
            size={"md"}
            color={"placeholderColor"}
            mb={[1, null, 1.5, null, 2]}
            maxW={"3xl"}
          >
            {primary.subtitle}
          </Text>

          <Divider
            my={[4, 5, 6, 7, 8]}
            bgColor={"placeholderColor"}
            borderColor={"placeholderColor"}
            maxW={"sm"}
          />

          <form onSubmit={formik.handleSubmit} noValidate>
            <Flex
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDir={"column"}
              gap={[3, null, 4, null, 5]}
              maxW={"2xl"}
            >
              <Flex
                flexDir={{ base: "column", sm: "row" }}
                alignItems={"flex-start"}
                gap={[3, null, 4, null, 5]}
              >
                <FormControl
                  isRequired
                  flex={1}
                  // isInvalid={formik.touched.name && !!formik.errors.name}
                  isInvalid={formik.touched.phone && !!formik.errors.phone}
                >
                  <Input
                    type={"number"}
                    placeholder={primary.name_placeholder || ""}
                    variant={"secondary"}
                    size={"lg"}
                    name="name"
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    value={formik.values.phone}
                    onChange={(e) => {
                      formik.setFieldValue("phone", e.target.value);
                    }}
                  />
                  <FormErrorMessage>{primary.name_error}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  flex={1}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                >
                  <Input
                    type="email"
                    placeholder={primary.email_placeholder || ""}
                    variant={"secondary"}
                    size={"lg"}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{primary.email_error}</FormErrorMessage>
                </FormControl>
              </Flex>
              <Box pos={"relative"} w={"fit-content"}>
                <Button
                  variant={"outline"}
                  disabled={loading}
                  size={"lg"}
                  w={"fit-content"}
                  type="submit"
                  onClick={() => {}}
                >
                  {primary.cta_label}
                </Button>
                {loading && (
                  <Spinner
                    size={"sm"}
                    pos={"absolute"}
                    top={0}
                    bottom={0}
                    right={"50%"}
                    left={"50%"}
                    margin={"auto"}
                  />
                )}
              </Box>
            </Flex>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default RequestCallBack;
