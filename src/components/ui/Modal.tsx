import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";

interface ModalProps {
    className?: string;
    isOpen?: boolean;
    text: string;
    onOpen?: () => void;
    onOpenChange?: () => void;
}

export const ModalComponent = (props: ModalProps) => {
    const {className, isOpen, text, onOpen, onOpenChange} = props;

    return (
        <div className={className}>
            <Button
                className="uppercase mr-auto"
                size="sm"
                color="primary"
                onPress={onOpen}
            >
                {text}
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                isKeyboardDismissDisabled={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Modal Title
                            </ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit
                                    amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute
                                    tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex
                                    incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do
                                    dolor eiusmod. Et mollit incididunt nisi
                                    consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt
                                    nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
