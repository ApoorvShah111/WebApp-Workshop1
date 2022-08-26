import axios from "axios";
class AppService{
    constructor(){

    }

    public test(){
        return {status:200, data: {Message: "test called lmao"}}
    };

    public async countryList(){
        const CountrylistURL: string="https://date.nager.at/api/v3/AvailableCountries";
        const result = await axios.get(CountrylistURL);
        //console.log(result.data);
        return {status:200, data: result.data};
    };
}

export const appservice= new AppService();