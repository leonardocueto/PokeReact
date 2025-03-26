export const apiFetch = async (paramsData: string) => {
    try{
        const response = await fetch(paramsData)
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        return data;
    }
    catch(error){
        throw new Error((error as Error).message || "Error fetching data")
    }
}