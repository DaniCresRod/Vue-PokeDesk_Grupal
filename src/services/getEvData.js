import axios from 'axios'

class	GetData 
{
	async getData(url)
	{
		try
		{
			const response = await axios.get(url);
			console.log(response);
			return (response);
		}
		catch(error)
		{
			console.log(error);
		}
	}
	getNumber()
	{
		return (Math.random());
	}
}

export default GetData;