import urls from '../resources/urls';
import { Api } from '../resources/api';
import { NotifyError, NotifySucess } from '@/resources/notification';

export class AdminService {
    constructor(vm) {
        this.vm = vm;
        this.api = new Api(vm);
    }

    async getProperties(receiver) {
        try {
            await this.api.get(urls.pending_properties, receiver);
        } catch (err) {
            NotifyError(this.vm, err.response.data.message);
            console.log(err);
        }
    }

    async getStatistics(receiver) {
        try {
            await this.api.get(urls.statistics, receiver);
        } catch (err) {
            NotifyError(this.vm, err.response.data.message);
            console.log(err);
        }
    }

    async getProperty(id, receiver) {
        try {
            await this.api.get(urls.property_detail + id, receiver);
        } catch (err) {
            NotifyError(this.vm, err.response.data.message);
            console.log(err);
        }
    }

    async approveProperty(id, receiver) {
        try {
            await this.api.get(urls.approve_property + id, receiver);
            NotifySucess(this.vm, "Successfully Approved Property");
            this.vm.$router.push({ name: 'property_list' });
        } catch (err) {
            NotifyError(this.vm, err.response.data.message);
            console.log(err);
        }
    }

    async rejectProperty(id, receiver) {
        try {
            await this.api.get(urls.reject_property + id, receiver);
            NotifySucess(this.vm, "Successfully Rejected Property");
            this.vm.$router.push({ name: 'property_list' });
        } catch (err) {
            NotifyError(this.vm, err.response.data.message);
            console.log(err);
        }
    }


}
