import { FormControl, Input, Modal, Stack} from "@mui/material";
import ModalDialog from '@mui/joy/ModalDialog';
import React from "react";
import { DialogContent, DialogTitle, ModalClose } from "@mui/joy";
import { ArrowLeftIcon } from "@mui/x-date-pickers";
import '../styles/modal.scss';

export type ModalForgetPassword = {
  openNext: () => void,
  onClose: (close: boolean) => void,
}


const ModalForgetPassword: React.FC<ModalForgetPassword> = ({ openNext, onClose }) => {
  

  return (
      <React.Fragment>
        {/* <Modal open={open} onClose={() => onClose(false)} className="modal-wrapper"> */}
          <ModalDialog  className="modal-container">
            <DialogTitle className="modal-tittle" >
              <ArrowLeftIcon sx={{ cursor: 'pointer' }} onClick={() => onClose(false)} className="modal-arrow"/>
              Forgot password
            <ModalClose variant="plain" onClick={() => onClose(false)} className='modal-plane'/>
            </DialogTitle>
            <DialogContent className="modal-content">
              Enter the email you used to register <br/> with and we'll send you a code to <br/> reset your password.
            </DialogContent>
            <form onSubmit={(e: React.SyntheticEvent) => {
              e.preventDefault();
              openNext();
              // onClose(false);
            }}>
              <Stack spacing={2}>
                <FormControl>
                  <Input placeholder="Email address" className="modal-input"/>
                </FormControl>
                <button type="submit" className="modal-submit-button">
                  Send password reset code
                </button>
              </Stack>
            </form>
          </ModalDialog>
        {/* </Modal> */}
      </React.Fragment>
)

}

export default ModalForgetPassword;