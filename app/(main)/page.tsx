import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader
} from '@/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


export default function Home() {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 mb-4'>
        <DashboardCard
          title='صافي الأرباح'
          count={7500}
          icon={<Newspaper className='h-4 w-4 text-muted-foreground' />}
          inc={20}
        />
        <DashboardCard
          title='إجمالي المبيعات'
          count={12}
          icon={<Folder className='h-4 w-4 text-muted-foreground' />}
          inc={10}
        />
        <DashboardCard
          title='إجمالي المصاريف'
          count={750}
          icon={<User className='h-4 w-4 text-muted-foreground' />}
          inc={5}
        />
        <DashboardCard
          title='المستخدمين'
          count={15}
          icon={<MessageCircle className='h-4 w-4 text-muted-foreground' />}
          inc={0}
        />
      </div>

      <div className='flex flex-row justify-between gap-5 mb-5'>
        <div className='w-3/5'>
          <AnalyticsChart />
        </div>
        <div className='w-2/5'>
          <Card>
            <CardHeader>
              <CardTitle>اخر المبيعات</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">حلاقة دقن</p>
                  <p className="text-sm text-muted-foreground">
                    احمد سعيد
                  </p>
                </div>
                <div className="mr-auto font-medium">$20+</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">حلاقة شعر</p>
                  <p className="text-sm text-muted-foreground">
                    محمد امين
                  </p>
                </div>
                <div className="mr-auto font-medium">$39+</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">حلاقة شعر</p>
                  <p className="text-sm text-muted-foreground">
                    محمد امين
                  </p>
                </div>
                <div className="mr-auto font-medium">$26+</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">تحديد شنب</p>
                  <p className="text-sm text-muted-foreground">احمد سعيد</p>
                </div>
                <div className="mr-auto font-medium">$9+</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">حلاقة شعر</p>
                  <p className="text-sm text-muted-foreground">
                    محمد امين
                  </p>
                </div>
                <div className="mr-auto font-medium">$39+</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </>
  );
}
