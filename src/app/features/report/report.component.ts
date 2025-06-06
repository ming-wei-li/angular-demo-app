import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public chartOption: any;
  public chartType: 'bar' | 'line' = 'bar';

  constructor() {
    this.loadChart();
  }

  loadChart(): void {
    const mockSalesData = {
      categories: ['筆電', '手機', '耳機', '鍵盤', '滑鼠'],
      data: [120, 200, 150, 80, 70],
    };

    this.chartOption = {
      title: {
        text: '商品銷售報表',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: mockSalesData.categories,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '銷量',
          type: 'bar',
          data: mockSalesData.data,
          itemStyle: {
            color: '#3398DB',
          },
        },
      ],
    };
  }

  switchType(): void {
    this.chartType = this.chartType === 'bar' ? 'line' : 'bar';
    this.loadChart();
  }

  ngOnInit(): void {
  }

}
