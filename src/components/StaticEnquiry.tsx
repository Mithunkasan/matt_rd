import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import { Field, Formik, useField } from 'formik'
import React from 'react'
import { redirect } from 'next/navigation';
import Router from 'next/router'
import { sendContactForm } from '../lib/api'
import * as Yup from 'yup';


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


const StaticEnquiry = () => {
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


    return (
        <div >
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
                    try {
                        await sendContactForm(newRegData);
                        resetForm()
                        setSubmitting(false)
                        //handleTost("success")
                        // redirect('/thankyou');
                        Router.push('/thankyou')
                    } catch (error) {

                        //handleTost("error")
                        console.log(error)
                    }
                }}
            >
                {({ handleChange, isSubmitting, handleSubmit, errors, touched }) => (
                    <>
                        <form onSubmit={handleSubmit}>
                            <Box width={{ base: 'sm', sm: 'xl', lg: 'lg' }}>
                                <FormControl width={'85%'} py={5} px={8} border='1px solid white' boxShadow={'2xl'}
                                    rounded={'2xl'}>
                                    <Box mb={5} >
                                        <Heading py={3} textAlign={'center'} variant={'h6'} mb={2} color='blue.900' className='blink'>
                                            Enquiry Form
                                        </Heading>
                                    </Box>
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
                                    <Box mb={2}>
                                        <FormLabel htmlFor='qualification'>Qualification</FormLabel>
                                        <Field
                                            as={Input}
                                            name='qualification'
                                            placeholder='Please enter qualification'
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <FormLabel htmlFor='dept'>Department</FormLabel>
                                        <Field
                                            as={Input}
                                            name='dept'
                                            placeholder='Please enter department'
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <FormLabel htmlFor='specialization'>Specialization</FormLabel>
                                        <Field as={Input} name='specialization'
                                            placeholder='Please enter specialization'
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <FormLabel htmlFor='uni/org'>University/Organization</FormLabel>
                                        <Field
                                            as={Input}
                                            name='university'
                                            placeholder='Please enter university'
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <FormLabel htmlFor='country'>Country</FormLabel>
                                        <Field
                                            as={Input}
                                            name='country'
                                            placeholder='Please enter country'
                                        />
                                    </Box>

                                    <Box mb={2}>
                                        <FormLabel htmlFor='state'>State</FormLabel>
                                        <Field
                                            as={Input}
                                            name='state'
                                            placeholder='Please enter state'
                                        />
                                    </Box>

                                    <Box mb={2}>
                                        <FormLabel htmlFor='url'>Services Required from Matt</FormLabel>
                                        <Stack spacing={5} direction='column'>

                                            <label  >
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
                                            <label >
                                                <Field type="checkbox" name="service" value="Three" />
                                                Article Translation
                                            </label>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <FormLabel htmlFor='desc'>Description</FormLabel>
                                        <MyTextArea name='description' />
                                    </Box>
                                    <Box mb={2}>
                                        <Button isLoading={isSubmitting} colorScheme='blue' type="submit">Submit</Button>
                                    </Box>
                                </FormControl>
                            </Box>
                        </form>
                    </>
                )
                }
            </Formik>
        </div>
    )
}

export default StaticEnquiry