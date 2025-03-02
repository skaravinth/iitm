'use client';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	cn,
} from '@heroui/react'; // Importing necessary components from the @heroui/react library



// Modal component definition
 const Modals = ({
	id,
	ModalContents,
	isopen,
	onClose,
	hideCloseButton = false,
	ModalFooterContent,
	footerStyles,
	bodyClassName,
	modalClassName,
	size = 'sm',
	width = 'auto',
	height = 'auto',
}) => {
	return (
		<Modal
			id={id} // Assigning the optional ID to the modal
			placement='center' // Placing the modal at the center of the screen
			isOpen={isopen} // Controlling the modal's open/close state
			onClose={onClose} // Assigning the onClose function
			className={cn(
				`max-w-[${width}] w-[${width}] max-h-[${height}] h-[${height}]`,
				'rounded-2xl',
				modalClassName,
			)} // Additional classes (empty by default)
			hideCloseButton={hideCloseButton} // Hiding the close button
			size={size} // Setting the modal size to "small"
			radius='lg' // Applying large border-radius to the modal
			classNames={{
				body: cn('p-6 pb-2', bodyClassName), // Adding padding to the modal body
				footer: footerStyles,
			}}
		>
			<ModalContent>
				<ModalBody className={cn(modalClassName)}>
					{ModalContents} {/* Rendering the passed content inside the modal */}
				</ModalBody>
				<ModalFooter className='mb-2'>{ModalFooterContent}</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default Modals
