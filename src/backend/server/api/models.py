from django.db import models
import uuid


# Create your models here.


class School(models.Model):
    HIGH_SCHOOL = "HS"
    HIGH_SCHOOL_TRANSFER = "HST"
    SCHOOL_TYPE_CHOICES = [
        (HIGH_SCHOOL, "High School"),
        (HIGH_SCHOOL_TRANSFER, "High School Transfer")
    ]
    BOROUGH_CHOICES = [
        ("M", "Manhattan"),
        ("X", "Bronx"),
        ("R", "Staten Island"),
        ("K", "Brooklyn"),
        ("Q", "Queens")
    ]
    #DBN means district "xx", borough "x", school number "xxx"
    dbn = models.CharField(max_length=6, unique=True, blank=False, null=False)
    school_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    school_name = models.CharField(max_length=50)
    school_type = models.CharField(max_length=3, choices=SCHOOL_TYPE_CHOICES, default=HIGH_SCHOOL)
    num_enrollment = models.PositiveIntegerField()
    borough_name = models.CharField(max_length=15)
    borough_code = models.CharField(max_length=1, choices=BOROUGH_CHOICES)
    phone_number = models.CharField(max_length=10)
    primary_address = models.CharField(max_length=50)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=2)
    zip_code = models.CharField(max_length=5)
    district_code = models.CharField(max_length=2)
    neighborhood = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



# 	def __str__(self):
# 		return self.model_name
#
# 	@property
# 	def title(self):
# 		return self.model_name
#
# 	def get_absolute_url(self):
# 		# return f"/vehicles/{self.slug}"
# 		return reverse('vehicles:detail', kwargs={'slug': self.slug})
