import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, X, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onUpload?: (file: File) => void;
}

export function FileUpload({ onUpload }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFile(droppedFile)) {
      handleFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFile(selectedFile)) {
      handleFile(selectedFile);
    }
  };

  const isValidFile = (file: File) => {
    const validTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];
    return validTypes.includes(file.type) || file.name.endsWith(".xlsx") || file.name.endsWith(".xls") || file.name.endsWith(".csv");
  };

  const handleFile = async (selectedFile: File) => {
    setFile(selectedFile);
    setIsUploading(true);

    // Simulate upload
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsUploading(false);
    setIsUploaded(true);
    onUpload?.(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    setIsUploaded(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300",
          isDragging
            ? "border-primary bg-accent scale-[1.02]"
            : "border-border hover:border-primary/50 hover:bg-accent/30",
          isUploaded && "border-primary bg-accent"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          className="hidden"
        />

        {isUploading ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center animate-pulse">
              <FileSpreadsheet className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">Uploading...</p>
              <p className="text-sm text-muted-foreground mt-1">{file?.name}</p>
            </div>
            <div className="w-48 h-2 mx-auto bg-secondary rounded-full overflow-hidden">
              <div className="h-full gradient-bg animate-pulse" style={{ width: "60%" }} />
            </div>
          </div>
        ) : isUploaded && file ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">File Uploaded Successfully!</p>
              <p className="text-sm text-muted-foreground mt-1">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Remove File
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">
                Drop your Excel file here
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                or click to browse
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Supports .xlsx, .xls, and .csv files
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
