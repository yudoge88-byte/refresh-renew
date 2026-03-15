import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type QuoteRequest = {
    name : Text;
    email : Text;
    phone : Text;
    projectDetails : Text;
  };

  let requests = List.empty<QuoteRequest>();

  public shared ({ caller }) func submitQuoteRequest(name : Text, email : Text, phone : Text, projectDetails : Text) : async () {
    let newRequest : QuoteRequest = {
      name;
      email;
      phone;
      projectDetails;
    };
    requests.add(newRequest);
  };

  public query ({ caller }) func getAllRequests() : async [QuoteRequest] {
    requests.toArray();
  };

  public query ({ caller }) func getRequestByIndex(index : Nat) : async QuoteRequest {
    if (index >= requests.size()) {
      Runtime.trap("Index out of bounds");
    };
    requests.at(index);
  };
};
