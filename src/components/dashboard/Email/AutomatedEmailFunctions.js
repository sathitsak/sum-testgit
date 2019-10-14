import axios from "axios";

import {constructConfirmationEmail} from "./ProposalSubmissionEmail"
import {constructProposalRejectEmail} from "./ProposalReject"
import {constructProposalAcceptEmail} from "./ProposalAccept"

export function proposalSentConfirmation(
  client,
  secondaryClient,
  clientFirstName,
  secondaryClientFirstName,
  title, 
  outline, 
  beneficiaries, 
  benefits,
  original, 
  used

) {

  axios
    .post(`http://35.197.167.244/message`, {
      from: "CIS Project Management",
      to: client,
      subject: "Proposal Submission Confirmation",
      html: constructConfirmationEmail(clientFirstName, secondaryClientFirstName,title, 
        outline, 
        beneficiaries, 
        benefits,
        original, 
        used),
      projectType: "Proposal",
      cc: secondaryClient
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}



export function proposalOutcome(
  outcome, responseText, clientName, secondaryClientName, clientEmail, secondaryClientEmail
) {
  if (outcome == "reject") {
    axios
      .post(`http://35.197.167.244/message`, {
        from: "CIS Project Management",
        to: clientEmail,
        subject: "Proposal Outcome",
        html:
        constructProposalRejectEmail(clientName, secondaryClientName, responseText),
        projectType: "Proposal",
        cc: secondaryClientEmail
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  } else if ((outcome = "accept")) {
    axios
      .post(`http://35.197.167.244/message`, {
        from: "CIS Project Management",
        to: clientEmail,
        subject: "Proposal Outcome",
        html:
        constructProposalAcceptEmail(clientName, secondaryClientName, responseText),
        projectType: "Proposal",
        cc: secondaryClientEmail
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
