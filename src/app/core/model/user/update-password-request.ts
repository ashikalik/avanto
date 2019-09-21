export interface UpdatePasswordRequest {
    current_password: string;
    new_password: string;
    confirm_password: string;
}