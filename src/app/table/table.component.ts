import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
 
})
export class TableComponent implements OnInit {
selectedProducts3: any;

  constructor() { }

  ngOnInit(): void {
  }

  products=[
		{
			"Ne": "2023.2712",
			"Tpbem": "Peixes/frutos do mar processados",
			"QuntUni": "111kg",
			"description": "Peixes/frutos do mar processados",
			"code": "1",
		},
		{
			"Ne": "2023.2713",
			"Tpbem": "Peixes/frutos do mar processados",
			"QuntUni": "111kg",
			"description": "Peixes/frutos do mar processados",
			"code": "2",
		},
		{
			"Ne": "2023.2714",
			"Tpbem": "Peixes/frutos do mar processados",
			"QuntUni": "111kg",
			"description": "Peixes/frutos do mar processados",
			"code": "3",
		},
		{
			"Ne": "2023.2715",
			"Tpbem": "Peixes/frutos do mar processados",
			"QuntUni": "111kg",
			"description": "Peixes/frutos do mar processados",
			"code": "4",
		},
		{
			"Ne": "2023.2716",
			"Tpbem": "Peixes/frutos do mar processados",
			"QuntUni": "111kg",
			"description": "Peixes/frutos do mar processados",
			"code": "5",
		},

	]
}


