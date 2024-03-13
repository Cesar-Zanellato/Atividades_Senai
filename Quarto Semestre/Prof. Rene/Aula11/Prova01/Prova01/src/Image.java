import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Image {
    private String fileName;
    private LocalDateTime date;
    private String satelliteName;
    private FireSpot fireSpot;
    
    public Image() {
    }

    public Image(String fileName, LocalDateTime date, String satelliteName, FireSpot fireSpot) {
        this.fileName = fileName;
        this.date = date;
        this.satelliteName = satelliteName;
        this.fireSpot = fireSpot;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((fileName == null) ? 0 : fileName.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        result = prime * result + ((satelliteName == null) ? 0 : satelliteName.hashCode());
        result = prime * result + ((fireSpot == null) ? 0 : fireSpot.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Image other = (Image) obj;
        if (fileName == null) {
            if (other.fileName != null)
                return false;
        } else if (!fileName.equals(other.fileName))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        if (satelliteName == null) {
            if (other.satelliteName != null)
                return false;
        } else if (!satelliteName.equals(other.satelliteName))
            return false;
        if (fireSpot == null) {
            if (other.fireSpot != null)
                return false;
        } else if (!fireSpot.equals(other.fireSpot))
            return false;
        return true;
    }

    @Override
    public String toString() {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
                "dd/MM/yyyy HH:mm:ss");
        String criacaoString = formatter.format(date);

        return "Image [fileName=" + fileName + ", date=" + criacaoString + ", satelliteName=" + satelliteName + ", fireSpot="
                + fireSpot + "]";
    }
    
    
}
