import React, { ReactElement, useRef, useState } from 'react'
import {
    Box, Button, ButtonGroup, Checkbox,
    Drawer, DrawerBody, DrawerCloseButton,
    DrawerContent, DrawerFooter, DrawerHeader,
    DrawerOverlay, Flex, FocusLock, FormControl, FormLabel, Grid, Heading,
    IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Popover,
    PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, Textarea, useDisclosure, useToast
} from '@chakra-ui/react'
import Router from 'next/router'
import FileDropzoneDialog from './Dropzone'
import * as Yup from 'yup';
import { Field, Formik, useField } from 'formik'
import { sendContactForm } from '../lib/api';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const EnquireySchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name is Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    email: Yup.string()
        .email('Email is not valid')
        .required('Required'),
    mobno: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid').required('Required')
    // qualification: Yup.string()
    //     .required('Required'),
    // dept: Yup.string()
    //     .required('Required'),
    // specialization: Yup.string()
    //     .required('Required'),
    // country: Yup.string()
    //     .required('Required'),
    // state: Yup.string()
    //     .required('Required'),
    // description: Yup.string()
    //     .required('Required'),
    // service: Yup.string()
    //     .required('Required'),

});

const MyTextArea = ({ label, ...props }: any) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <Textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};
const EnquiryFom = () => {
    // const toast = useToast();
    const [selectedCountry, setSelectedCountry] = useState("");
    const [file, setFile] = useState([])
    const [touched, setTouched] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()

    const firstField = useRef<HTMLButtonElement | null>(null);

    
    
    const selectCountryHandler = (value) => setSelectedCountry(value);
    const toast = useToast({
        position: 'top',
        title: 'Successfully Submitted Your Request Our Team Will Respond You Within Couple of Hours',
        status: 'success',
        containerStyle: {
            width: '800px',
            maxWidth: '100%',
        },
    })
    const handleTost = (msg) => {
        if (msg === 'success') {

            return toast({
                position: 'top',
                status: 'success',
                title: 'Successfully Submitted Your Request Our Team Will Respond You Within Couple of Hours',
                containerStyle: {
                    // border: '20px solid red',
                },
            })
        }
        return toast({
            position: 'top',
            status: 'error',
            title: 'Successfully Submitted Your Request Our Team Will Respond You Within Couple of Hours',
            containerStyle: {
                // border: '20px solid red',
            },
        })

    }


    const handleFile = (file) => {
        console.log("fn called")
        setFile(file)
    }

    // console.log('country', countryArr)
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    mobno: '',
                    qualification: '',
                    dept: '',
                    specialization: '',
                    university: '',
                    country: '',
                    state: '',
                    description: '',
                    service: ''


                }}
                validationSchema={EnquireySchema}
                //{{ ...initialValues, previewImage, previewSignature }}
                // onSubmit={(values): JSX.Element =>hanage(values.previewSignature)  }
                onSubmit={async (values, { setSubmitting, resetForm }) => {

                    let newRegData: any = { ...values };

                    console.log(values)
                    // newRegData.file = file
                    // let emilData = { name: "aneesh", email: "aneeshpk32@gmail.com", subject: "test", message: "hair" };
                    try {
                        await sendContactForm(newRegData);

                        // await sendEmail('aneeshpk32@gmail.com', 'test', 'hair')
                        // setTouched({});
                        // setState(initState);
                        // toast({
                        //   title: "Message sent.",
                        //   status: "success",
                        //   duration: 2000,
                        //   position: "top",
                        // });

                        resetForm()
                        setSubmitting(false)
                        Router.push('/thankyou')
                        // handleTost("success")
                    } catch (error) {
                        // setState((prev) => ({
                        //   ...prev,
                        //   isLoading: false,
                        //   error: error.message,
                        // }));
                        setSubmitting(false)
                        handleTost("error")
                        console.log(error)
                    }

                    onClose()
                }}
            >
                {({ handleChange, isSubmitting, handleSubmit, values, errors, touched }) => (
                    <>
                        <Button className="heading" onClick={onOpen}
                        >Enquiry Form</Button>
                        <br />

                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            initialFocusRef={firstField}
                            onClose={onClose}
                            size={'lg'}
                        >
                            <form onSubmit={handleSubmit}>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />
                                    <DrawerHeader borderBottomWidth='1px'>
                                        Create an Enquiry
                                    </DrawerHeader>

                                    <DrawerBody>
                                        <Stack spacing='24px'>
                                            <FormControl>
                                                <FormLabel htmlFor='username'>Name</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='name'
                                                    placeholder='Please enter user name'
                                                />
                                                {errors.name && touched.name ? (<Text color={"red"}>{errors.name}</Text>) : null}
                                            </FormControl>
                                            <Box>
                                                <FormLabel htmlFor='emailid'>Email Id</FormLabel>
                                                <Field
                                                    name='email'
                                                    as={Input}
                                                    placeholder='Please enter email id'
                                                />
                                                {errors.email && touched.email ? (<Text color={"red"}>{errors.email}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='mobno'>Mobile Number</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name="mobno"
                                                    placeholder='Please enter Mobile number'
                                                />
                                                {errors.mobno && touched.mobno ? (<Text color={"red"}>{errors.mobno}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='qualification'>Qualification</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='qualification'
                                                    placeholder='Please enter qualification'
                                                />
                                                {errors.qualification && touched.qualification ? (<Text color={"red"}>{errors.qualification}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='dept'>Department</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='dept'
                                                    placeholder='Please enter department'
                                                />
                                                {errors.dept && touched.dept ? (<Text color={"red"}>{errors.dept}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='specialization'>Specialization</FormLabel>
                                                <Field as={Input} name='specialization'
                                                    placeholder='Please enter specialization'
                                                />
                                                {errors.specialization && touched.specialization ? (<Text color={"red"}>{errors.specialization}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='uni/org'>University/Organization</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='university'
                                                    placeholder='Please enter university'
                                                />
                                                {errors.university && touched.university ? (<Text color={"red"}>{errors.university}</Text>) : null}
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='country'>Country</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='country'
                                                    placeholder='Please enter country'
                                                />
                                                {errors.country && touched.country ? (<Text color={"red"}>{errors.country}</Text>) : null}
                                            </Box>

                                            <Box>
                                                <FormLabel htmlFor='state'>State</FormLabel>
                                                <Field
                                                    as={Input}
                                                    name='state'
                                                    placeholder='Please enter state'
                                                />
                                                {errors.state && touched.state ? (<Text color={"red"}>{errors.state}</Text>) : null}
                                            </Box>

                                            <Box>
                                                <FormLabel htmlFor='url'>Services Required from Matt</FormLabel>
                                                <Stack spacing={5} direction='column'>

                                                    <label>
                                                        <Field type="checkbox" name="service" value="   Review Article Writing/ Editing" />
                                                        Review Article Writing/ Editing
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value=" Research Article Writing/ Editing" />
                                                        Research Article Writing/ Editing
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Plagiarism Free Writing" />
                                                        Plagiarism Free Writing
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Proofreading" />
                                                        Proofreading
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Projects Development and implementation" />
                                                        Projects Development and implementation
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Content Writing / Editing" />
                                                        Content Writing / Editing
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value=" Survey / Data Analysis" />
                                                        Survey / Data Analysis
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Three" />
                                                        Survey / Data Analysis
                                                    </label>
                                                    <label>
                                                        <Field type="checkbox" name="service" value="Three" />
                                                        Article Translation
                                                    </label>
                                                </Stack>
                                            </Box>
                                            <Box>
                                                <FormLabel htmlFor='desc'>Description</FormLabel>
                                                <MyTextArea name='description' />
                                            </Box>
                                        </Stack>
                                    </DrawerBody>

                                    <DrawerFooter borderTopWidth='1px'>
                                        <Button variant='outline' mr={3} onClick={onClose}>
                                            Cancel
                                        </Button>
                                        <Button width={'50%'} isLoading={isSubmitting} colorScheme='blue' type="submit">Submit</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </form>
                        </Drawer>

                        {/* <FileDropzoneDialog handileFiles={handleFile} /> */}
                    </>
                )
                }
            </Formik >
        </div >
    )
}

export default EnquiryFom