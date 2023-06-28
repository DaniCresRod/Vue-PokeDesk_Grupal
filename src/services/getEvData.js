import axios from 'axios'

class	GetData 
{
	async getData(url)
	{
		try
		{
			const response = await axios.get(url);
			return (response);
		}
		catch(error)
		{
			console.log(error);
			return (error.message);
		}
	}
}

export default GetData;