'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import data from '@/data/analytics';

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>احصائية السنة الحالية</CardTitle>
          {/* <CardDescription>Views Per Month</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart width={1100} height={300} data={data} style={{direction: 'ltr'}}>
                <Bar type='monotone' dataKey='uv' fill='#b9702d' radius={5} />
                <XAxis dataKey='name' reversed={true}  />
                <YAxis orientation="right"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
