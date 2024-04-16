import swal from 'sweetalert2';
const Toast = swal.mixin({
	toast: true,
	position: 'top',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', swal.stopTimer);
		toast.addEventListener('mouseleave', swal.resumeTimer);
	},
});

export default Toast;
// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully',
// });
