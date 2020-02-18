export class CustomerRequest{
  requestId(requestId: any) {
    throw new Error("Method not implemented.");
  }
    public customerId : number;
    public source : string;
    public destination : string;
    
    public model : string;
    public estimatePrice: number; 
    
}