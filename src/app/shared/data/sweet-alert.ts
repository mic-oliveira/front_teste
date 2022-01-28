import swal, {SweetAlertOptions} from 'sweetalert2';

export class SweetAlert {

  private static open(alert: SweetAlertOptions) {
    return swal.fire(alert);
  }

  static success(title: string, body?: string, confirmText: string = 'OK') {
    return this.open({title: title, text: body, confirmButtonText: confirmText, icon: 'success'});
  }

  static error(title: string, body?: string, confirmText: string = 'OK') {
    return this.open({title: title, text: body, confirmButtonText: confirmText, icon: 'error', confirmButtonColor: 'danger'});
  }

  static confirm(title: string, body?: string, confirmText: string = 'OK', cancelText: string = null) {
    return this.open({
      title: title,
      text: body,
      icon: 'question',
      confirmButtonText: confirmText,
      confirmButtonColor: '#f55252',
      showCancelButton: !!cancelText,
      cancelButtonText: cancelText,
      cancelButtonColor: '#2f8be6',
    });
  }
}
