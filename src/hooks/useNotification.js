import { useSnackbar } from 'notistack'

export const useNotification = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const handleNotification = (message, variant) => {
		enqueueSnackbar(message, {
			autoHideDuration: 3000,
			variant: variant,
		})
	}

	return [handleNotification]
}
