import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://www.yahoo.com.com', 'Ruby on Rails', 150, 120, 15, 'test@example.com')
	proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://www.yahoo.com.com', 'Ruby on Rails', 150, 120, 15, 'test@example.com')
	proposalThree: Proposal = new Proposal(300, 'Something Company', 'http://www.yahoo.com.com', 'Ruby on Rails', 150, 120, 15, 'test@example.com')

	proposals: Proposal[] = [
		this.proposalOne,
		this.proposalTwo,
		this.proposalThree
	]
}
