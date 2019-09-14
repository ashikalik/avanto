export interface Package {
    package_id: number;
    event_id: number;
    name: string;
    description: string;
    specific_tickets: number;
    max_tickets: number;
    is_free: number;
    price: number;
    audience_id: number;
    status_id: number;
    created_at: Date;
    updated_at: Date;
    audience_name: string;
}