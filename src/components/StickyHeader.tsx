import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, Checkbox, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FocusLock, FormControl, FormLabel, Grid, Heading, IconButton, Input, InputGroup, InputLeftAddon, InputRightAddon, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import FileDropzoneDialog from './Dropzone'
import EnquiryFom from './EnquiryFom'

// // 1. Create a text input component
// const TextInput = React.forwardRef((props, ref) => {
//     return (
//         <FormControl>
//             <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
//             <Input ref={ref} id={props.id} {...props} />
//         </FormControl>
//     )
// })

// // 2. Create the form
// const Form = ({ firstFieldRef, onCancel }) => {
//     return (
//         <Stack spacing={4}>
//             <TextInput
//                 label='First name'
//                 id='first-name'
//                 ref={firstFieldRef}
//                 defaultValue='John'
//             />
//             <TextInput label='Last name' id='last-name' defaultValue='Smith' />
//             <ButtonGroup display='flex' justifyContent='flex-end'>
//                 <Button variant='outline' onClick={onCancel}>
//                     Cancel
//                 </Button>
//                 <Button isDisabled colorScheme='teal'>
//                     Save
//                 </Button>
//             </ButtonGroup>
//         </Stack>
//     )
// }

const StickyHeader = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()


    return (
        <div>

            <div className="container-fluid ">
                <div className="col-sm-12 text-center container-fluid d-none mt-0 pt-0">
                    <div className="row mt-1 mb-1 pt-0">
                        <div className="col-sm-4 col-xs-12">
                            <h6 className="heading pt-2">Talk to us now</h6>
                            <p style={{ fontSize: "14px" }}><a className="text-decoration-none" href="tel:9150770317" style={{ color: "green" }}>+91-8825735141</a> | <a className="text-decoration-none" href="tel:9345534648" style={{ color: "green" }}>+91-8547486582</a></p>
                        </div>

                        <div className="col-sm-4 col-xs-12">

                            <h6 className="heading pt-2">Send us an email</h6>
                            <p style={{ fontSize: "14px" }}>info@mattengg.com</p>

                        </div>

                        <div className="col-sm-4 col-xs-12 ">
                            <EnquiryFom />
                            <p className='pt-0 mt-0' style={{ fontSize: "14px" }}>If You have any queries fill up this form</p>

                        </div>
                        
                        {/* <div className="col-sm-3 col-xs-12">
                            <h6 className="heading">Join us as "Joint Supervisors"</h6>
                            <p style={{ fontSize: "14px" }}>If You have any queries fill up this form</p>
                        </div> */}
                    </div>
                </div>

            </div>
            <div className=" text-center p-4 head2 d-none">
                <a className="text-decoration-none text-white blink a2" href="#">To join our team  please share your profile @ <span className="text-danger">info@mattengg.com</span> </a>
            </div>
        </div>


    )
}

export default StickyHeader