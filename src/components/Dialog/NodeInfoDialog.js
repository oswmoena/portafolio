import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from "@material-ui/icons/Close";
import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
	createStyles({
		closeButton: {
			position: 'absolute',
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: theme.palette.grey[500],
		},
		custDialogContent: {
			padding: '1.5rem 24px',
		},
		custDialogActions: {
			alignItems: 'center',
			display: 'flex',
			justifyContent: 'center',
			padding: '1rem',
		},
	})
)
export const NodeInfoDialog = ({open, close}) => {
	const classes = useStyles();
    return (
        <Dialog onClose={close} open={open} maxWidth="lg">
			<DialogTitle>
			<h1 className={"ct-light-black ff-LatoRegular fs20 m-0 tt-upper"}>
          {"Node"}
        </h1>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={close}
        >
          <CloseIcon />
        </IconButton>
			</DialogTitle>
			<DialogContent classes={{ root: classes.custDialogContent }}>
				
			</DialogContent>
			<DialogActions disableSpacing classes={{ root: classes.custDialogActions }}>
				<Button color="primary" onClick={() => close()} variant="contained">
					{'Cerrar'}
				</Button>
			</DialogActions>
		</Dialog>
    )
}
