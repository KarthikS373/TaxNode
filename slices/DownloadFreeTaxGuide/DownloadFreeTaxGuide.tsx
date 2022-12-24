import axios, { AxiosError, AxiosResponse } from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Container,
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

import type { DownloadFreeTaxGuideSlice } from "../../.slicemachine/prismicio";

const TitleSubtitleCta: React.FC<{ slice: DownloadFreeTaxGuideSlice }> = ({
  slice,
}) => {
  const [loading, setLoading] = useState(false);
  const { primary } = slice;
  const toast = useToast();

  // Form Validation and Submission
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required()
        .matches(/^[aA-zZ\s]+$/),
      email: Yup.string().trim().email().required(),
    }),
    onSubmit: async (value) => {
      setLoading(true);

      axios
        .get("/api/dwnldtaxguide", {
          params: {
            name: formik.values.name,
            email: formik.values.email,
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response);
          if (response.status == 200) {
            toast({
              title: "Account created.",
              description: primary.success_text,
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
            title: "Sorry we ran into some error",
            description: primary.error_text,
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

  return (
    <>
      <Box pos={"relative"} my={[10, 12, 14, 16, 20]}>
        <Container>
          <Heading
            color={"themeDarkPurple"}
            as={"h2"}
            fontWeight={"semibold"}
            size={"2xl"}
            textAlign={"center"}
            lineHeight={"10"}
            fontFamily={"Inter"}
            mb={[3, null, 4, null, 5]}
          >
            {primary.title}
          </Heading>
          <form onSubmit={formik.handleSubmit} noValidate>
            <Flex
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDir={"column"}
              gap={[3, null, 4, null, 5]}
            >
              <Flex
                flexDir={{ base: "column", sm: "row" }}
                alignItems={"flex-start"}
                gap={[3, null, 4, null, 5]}
              >
                <FormControl
                  isRequired
                  flex={1}
                  isInvalid={formik.touched.name && !!formik.errors.name}
                >
                  <Input
                    placeholder={primary.name_placeholder || ""}
                    variant={"secondary"}
                    size={"lg"}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  <FormErrorMessage>{primary.name_error_text}</FormErrorMessage>
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
                  <FormErrorMessage>
                    {primary.email_error_text}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <Box pos={"relative"} w={"fit-content"}>
                <Button
                  variant={"tertiary"}
                  type="submit"
                  disabled={loading}
                  size={"lg"}
                  w={"fit-content"}
                  rightIcon={
                    <>
                      <DownloadIcon />
                    </>
                  }
                  onClick={() => {}}
                >
                  Download FreeTax Guide
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

export default TitleSubtitleCta;
