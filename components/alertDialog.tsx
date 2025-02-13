import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { Diagnosis } from "@prisma/client"
  
  export const AlertDetail = ({deskripsi}: {deskripsi: Diagnosis}) => {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Detail</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
                {deskripsi.text}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {deskripsi.deskripsi}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tutup</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  